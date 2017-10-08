import { Component } from '@angular/core';
import { User } from './users';
import { FormBuilder, Validators } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-root',
    templateUrl: './user.component.html',
    styleUrls: ['./user.styles.css']
})

export class UserComponent {
    public registration = this.fb.group({
        name: ["a", Validators.required],
        email: ["a@a", Validators.required],
        phone: ["123", Validators.required],
        meals: [, Validators.required],
        roleType: [, Validators.required],
        shoppingRole: [, Validators.required],
        hasCar: [false],
        cookRole: [, Validators.required],
        roleTime: [, Validators.required],
        otherRole: [, Validators.required],
        courseName: [, Validators.required]
    });
    constructor(public fb: FormBuilder) { }
    submit1(event) {
        console.log(this.registration.value);
        $('ul li a[href="#step-2"]').removeClass("disabled").trigger('click');
    }

    form1invalid(): boolean {
        return this.registration.controls['meals'].invalid
            || this.registration.controls['name'].invalid
            || this.registration.controls['email'].invalid
            || this.registration.controls['phone'].invalid;
    }

    form2invalid(): boolean {
        var reg = this.registration
        function typeIs(val: string): boolean {
            return reg.value['roleType'] == val;
        }

        function roleInvalid(role: string): boolean {
            return invalid(role + 'Role');
        }

        function invalid(field: string): boolean {
            return reg.controls[field].invalid;
        }

        function value(field: string): any {
            return reg.value[field];
        }

        return reg.controls['roleType'].invalid
            || typeIs('cook') && (roleInvalid('cook') || value('cookRole') != 'soup' && invalid('roleTime'))
            || typeIs('shopping') && roleInvalid('shopping')
            || typeIs('other') && (roleInvalid('other') || value('otherRole') == 'dishWashing' && invalid('roleTime'))
            || reg.controls['phone'].invalid;
    }

    form3invalid(): boolean {
        return false;
    }

    submit2(event) {
        console.log(this.registration.value);
        $('ul li a[href="#step-3"]').removeClass("disabled").trigger('click');
    }

    submit3(event) {
        console.log(this.registration.value);
    }

    ngOnInit() {
        var disableNavItems = () =>
            $(".disabled").click(() => false);


        var setControls = () => {
            var navListItems = $('ul.setup-panel li a'),
                allWells = $('.setup-content');
            allWells.hide();

            navListItems.click(function (e) {
                if ($(this).hasClass("disabled"))
                    return;
                e.preventDefault();
                var $target = $($(this).attr('href')),
                    $item = $(this).closest('li');

                if (!$item.hasClass('active')) {
                    navListItems.closest('li').removeClass('active');
                    navListItems.removeClass('active');
                    $(this).addClass('active');
                    allWells.hide();
                    $target.show();
                }
            });
            $('.setup-content').filter(".active").fadeIn();
        }
        $(document).ready(function () {
            disableNavItems();
            setControls();
        });

        // Add , Dlelete row dynamically

        $(document).ready(function () {
            var i = 1;
            $("#add_row").click(function () {
                $('#addr' + i).html("<td>" + (i + 1) + "</td><td><input name='name" + i + "' type='text' placeholder='Name' class='form-control input-md'  /> </td><td><input  name='sur" + i + "' type='text' placeholder='Surname'  class='form-control input-md'></td><td><input  name='email" + i + "' type='text' placeholder='Email'  class='form-control input-md'></td>");

                $('#tab_logic').append('<tr id="addr' + (i + 1) + '"></tr>');
                i++;
            });
            $("#delete_row").click(function () {
                if (i > 1) {
                    $("#addr" + (i - 1)).html('');
                    i--;
                }
            });

        });


    }
}