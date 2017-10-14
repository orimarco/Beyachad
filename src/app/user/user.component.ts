import { Component, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { NgIf } from '@angular/common';
import { NgFor } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { IngredientsService } from '../ingredients.service';
import { IIngredient } from '../ingredients';

@Component({
  selector: 'app-user',
  providers: [IngredientsService],
  templateUrl: './user.component.html',
  styleUrls: ['./user.styles.css']
})

export class UserComponent {
  public registration = this.fb.group({
    name: ['a', Validators.required],
    email: ['a@a', Validators.required],
    phone: ['123', Validators.required],
    meals: [, Validators.required],
    roleType: [, Validators.required],
    shoppingRole: [, Validators.required],
    hasCar: [false],
    cookRole: [, Validators.required],
    roleTime: [, Validators.required],
    otherRole: [, Validators.required],
    courseName: [, Validators.required]
  });

  public ingredients: Array<IIngredient>;
  public removed = [];
  public selectedIngredients: Array<any> = [];
  public selectedIngredient: any = new FormControl('');
  public selectedQuantity: any = new FormControl('');
  constructor(private ref: ChangeDetectorRef,
    private fb: FormBuilder,
    private _sanitizer: DomSanitizer,
    private _ingredientsService: IngredientsService
  ) { }

  private fetchIngredients() {
    this._ingredientsService.get()
      .subscribe(_ => this.ingredients = _);
  }

  autocompleListFormatter = (data: any): SafeHtml => {
    const html = `<span>${data.name}</span>`;
    return this._sanitizer.bypassSecurityTrustHtml(html);
  }


  submit1(event): void {
    $('ul li a[href="#step-2"]').removeClass('disabled').trigger('click');
  }

  form1invalid(): boolean {
    return this.registration.controls['meals'].invalid
      || this.registration.controls['name'].invalid
      || this.registration.controls['email'].invalid
      || this.registration.controls['phone'].invalid;
  }

  form2invalid(): boolean {
    const reg = this.registration;
    function typeIs(val: string): boolean {
      return reg.value['roleType'] === val;
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
      || typeIs('cook') && (roleInvalid('cook') || value('cookRole') !== 'soup' && invalid('roleTime'))
      || typeIs('shopping') && roleInvalid('shopping')
      || typeIs('other') && (roleInvalid('other') || value('otherRole') === 'dishWashing' && invalid('roleTime'))
      || reg.controls['phone'].invalid;
  }

  form3invalid(): boolean {
    const reg = this.registration;
    return reg.value['roleType'] === 'cook' && (reg.controls['courseName'].invalid || this.selectedIngredients.length === 0);
  }

  submit2(event) {
    $('ul li a[href="#step-3"]').removeClass('disabled').trigger('click');
  }

  submit3(event) {
    console.log(this.registration.value);
  }
  removeFromSelected(element: any): void {
    this.selectedIngredients.splice(this.selectedIngredients.indexOf(element), 1);
  }
  ngOnInit() {
    this.fetchIngredients();
    const disableNavItems = () =>
      $('.disabled').click(() => false);

    const setControls = () => {
      const navListItems = $('ul.setup-panel li a'),
        allWells = $('.setup-content');
      allWells.hide();

      navListItems.click(function (e) {
        // tslint:disable-next-line:curly
        if ($(this).hasClass('disabled'))
          return;
        e.preventDefault();
        const $target = $($(this).attr('href')),
          $item = $(this).closest('li');

        if (!$item.hasClass('active')) {
          navListItems.closest('li').removeClass('active');
          navListItems.removeClass('active');
          $(this).addClass('active');
          allWells.hide();
          $target.show();
        }
      });
      $('.setup-content').filter('.active').fadeIn();
    };
    $(document).ready(function () {
      disableNavItems();
      setControls();
    });


    const removeFromSelected = (id: any): void => {
      const ingredient = this.removed.find((x) => x['id'] === id);
      this.selectedIngredients.splice(this.selectedIngredients.indexOf(this.selectedIngredients.find((x) => x['id'] === id)), 1);
      this.ingredients.push(ingredient);
      this.removed.splice(this.removed.indexOf(ingredient), 1);
    };


    const addToSelected = (): void => {
      this.removed.push(this.selectedIngredient.value);
      this.ingredients.splice(this.ingredients.indexOf(this.selectedIngredient.value), 1);
      this.selectedIngredients.push({
        'id': this.selectedIngredient.value['id'],
        'name': this.selectedIngredient.value['name'],
        'unit': this.selectedIngredient.value['unit'],
        'quantity': this.selectedQuantity.value
      });
      const id = this.selectedIngredient.value['id'];
      $(document).ready(function () {
        $('#btn-' + id).click(function () {
          removeFromSelected(id);
          $(this).parent().remove();
        });
      });
      this.selectedIngredient.reset();
      $('#unitsInput').val(function () {
        return this.defaultValue;
      });
    };

    $(document).ready(() => {
      $('#addIngredient').click(() => {
        addToSelected();
        this.ref.detectChanges();
      });
    });
  }
}
