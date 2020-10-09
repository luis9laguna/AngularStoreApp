import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CategoryService } from 'src/app/shared/services/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-edit.component.html',
  styleUrls: ['./create-edit.component.scss']
})
export class CreateCategoryComponent {

  public isEdit: boolean = false;

  public categoryForm = this.fb.group({ name: ['', Validators.required] });

  constructor(private fb: FormBuilder,
    private categoryService: CategoryService) { }

  saveCategory() {
    this.categoryService.createCategory(this.categoryForm.value)
      .subscribe(data => {
        Swal.fire({
          icon: 'success',
          title: `The category *${data['category'].name}*
                    has been saved successfully`,
          showConfirmButton: false,
          timer: 2000
        })
      }, (err) => {
        Swal.fire('Error', err.error.message, 'error');
      });
  }
}
