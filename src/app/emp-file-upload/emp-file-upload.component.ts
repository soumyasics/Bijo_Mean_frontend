import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { log } from 'console';
// import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-emp-file-upload',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './emp-file-upload.component.html',
  styleUrl: './emp-file-upload.component.css'
})
export class EmpFileUploadComponent {

  fileName = '';

    constructor(private http: HttpClient) {}

    onFileSelected(event:any) {

        const file:File = event.target.files[0];

        if (file) {

            this.fileName = file.name;
console.log(file);

            const formData = new FormData();
            formData.append("one", "one");

            formData.append("thumbnail", file);
            console.log(formData);
            
            const upload$ = this.http.post("/api/thumbnail-upload", formData);

            upload$.subscribe();
        }
    }

    upload_file(file_upload:any){

    }
}
