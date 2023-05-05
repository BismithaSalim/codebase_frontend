import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators} from '@angular/forms';
import { HomeService } from './home.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  homeForm!:UntypedFormGroup
  flag=false
  url:any
  constructor(private formBuilder: UntypedFormBuilder,private router: Router,private homeService:HomeService) { 

    this.homeForm = this.formBuilder.group({
       longurl: ['', Validators.required],
       shorturl:['', Validators.required]
      })
  }

  ngOnInit(): void {}

  shorten(){

    console.log("form values:-",this.homeForm.value)

    if (this.homeForm.value.longurl == "") {
      alert("url field must be filled out");
      this.router.navigate([''])
    }
    this.homeService.shorten(this.homeForm.value).subscribe((response: any) => {
      // console.log("status>>>>",status)
      if(response.status==200){
        console.log("hi")
        this.flag=true
        this.url=response.shortUrl
        console.log(">>>>>",this.url)
        this.homeForm.controls['shorturl'].setValue(this.url)
        this.router.navigate([''])
      }

  })
}

redirect(){
  console.log("heloo")
  this.homeService.redirect(this.homeForm.value.shorturl).subscribe((response: any) => {
        console.log("ressssssss",response)
  })
}
}



