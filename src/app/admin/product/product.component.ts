import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  id:any;
  formdata:any;
  categories:any;
  product:any;

  imagestring = "";

  imageBase64: Array<any> | null = null;
  categoryImageBase64: string | null = null;

  constructor(private api:ApiService, private route:ActivatedRoute, private router:Router,private fb: FormBuilder) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.paramMap.get("id");

    this.api.post("productcategory/list", {}).subscribe((result:any)=>{
      this.categories = result.data;
    });

    if(this.id != null){
      this.api.post("product/get", {data:{id:this.id}}).subscribe((result:any)=>{
        this.product = result.data;
        this.bind();
      });
    }
    else{
      this.bind();
    }
  }

  bind(){
    this.formdata = this.fb.group(
      {
        id:new FormControl(this.product != null ? this.id : ""),
        pcid:new FormControl(this.product != null ? this.product.pcid : "", Validators.required),
        name:new FormControl(this.product != null ? this.product.name : "", Validators.required),
        description:new FormControl(this.product != null ? this.product.description : "", Validators.required),
        specification:new FormControl(this.product != null ? this.product.specification : "", Validators.required),
        mrp:new FormControl(this.product != null ? this.product.mrp : 0, Validators.required),
        price:new FormControl(this.product != null ? this.product.price : 0, Validators.required),
        instock:new FormControl(this.product != null ? this.product.instock : "Yes", Validators.required),
        isactive:new FormControl(this.product != null ? this.product.isactive : "Yes", Validators.required),
        imagepath:new FormControl(this.product != null ? this.product.imagepath : '', Validators.required),
      }
    )
  }

  

  onImageChange(event: any) {
    const files: FileList = event.target.files;
    const convertedImages: string[] = []; // Array to store converted images
    if (files && files.length > 0) {
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const reader = new FileReader();
        reader.onload = (e) => {
          const img = new Image();
          img.src = e?.target?.result as string;
          img.onload = () => {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            
            // Define new dimensions and compression quality
            const newWidth = 1000;
            const newHeight = 1000;
            const quality = 0.8; // Specify the desired image quality (0.0 to 1.0)
  
            // Set the canvas size
            canvas.width = newWidth;
            canvas.height = newHeight;
  
            // Draw the image onto the canvas with the new dimensions
            ctx?.drawImage(img, 0, 0, newWidth, newHeight);
  
            // Convert the canvas content to a base64 string with compression
            const imageBase64 = canvas.toDataURL('image/jpeg', quality); // Use 'image/jpeg' for JPEG format
            convertedImages.push(imageBase64); // Push the converted image into the array
            this.imageBase64 = convertedImages;
            console.log("this.imageBase64", this.imageBase64);
          };
        };
        reader.readAsDataURL(file);
      }
    }
  }
  
  

  onClickSubmit(){
    const dataSubmit =  {
      id: this.formdata.get('id')?.value,
      pcid: this.formdata.get('pcid')?.value,
      name: this.formdata.get('name')?.value,
      description: this.formdata.get('description')?.value,
      specification: this.formdata.get('specification')?.value,
      mrp: this.formdata.get('mrp')?.value,
      price: this.formdata.get('price')?.value,
      instock: this.formdata.get('instock')?.value,
      isactive: this.formdata.get('isactive')?.value,
      imagepath: this.imageBase64 || '',
    }
    console.log("dataSubmit.image", dataSubmit)
    if (dataSubmit) {
      this.api.post("product/save", {data:dataSubmit}).subscribe(
        (response: any) => {
          console.log('dataSubmit created successfully:', response);
        },
        (error) => {
          console.error('Error creating product:', error);
        }
      );
    }
    // this.api.post("product/save", {data:dataSubmit}).subscribe((result:any)=>{
    //   console.log("result.image",result);
      this.router.navigate(['/admin/products']);
    // })
  }
}
