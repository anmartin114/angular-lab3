import { Component, OnInit } from "@angular/core";
import { ProfileService } from "../services/profile.service";
import { UserProfile } from "../interfaces/user-profile";
import { Router } from "@angular/router";

@Component({
  selector: "app-profile-component",
  templateUrl: "./profile-component.component.html",
  styleUrls: ["./profile-component.component.css"]
})
export class ProfileComponentComponent implements OnInit {
  profile: UserProfile;

  constructor(private profileService: ProfileService, private router: Router) {}

  ngOnInit() {
    this.profile = this.profileService.getUserProfile();
  }

  onEdit() {
    this.router.navigate(["edit-component"]);
  }
}
