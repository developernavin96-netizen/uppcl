import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

 isEditing = false;
  activeTab = 'Overview';

  profile = {
    name: 'Navin Kumar',
    email: 'navin.kumar@example.com',
    phone: '+91 98765 43210',
    designation: 'Senior Administrator',
    role: 'Admin',
    department: 'IT & Development',
    location: 'Noida, Uttar Pradesh',
    joiningDate: '01 March 2023',
    about: 'Experienced administrator focused on managing users, permissions and enterprise applications.',
    skills: ['Angular', 'TypeScript', 'JavaScript', 'Node.js', 'RxJS', 'SCSS']
  };

  stats = [
    { title: 'Total Users', value: 1250, icon: '👥', color: 'blue' },
    { title: 'Active Projects', value: 24, icon: '📁', color: 'green' },
    { title: 'Pending Tasks', value: 18, icon: '📋', color: 'orange' },
    { title: 'Login Hours', value: 168, icon: '⏱', color: 'purple' }
  ];

  activities = [
    { title: 'Profile information updated', time: '2 hours ago' },
    { title: 'User permissions modified', time: 'Yesterday' },
    { title: 'New team member added', time: '2 days ago' },
    { title: 'Security settings reviewed', time: '4 days ago' }
  ];

  tabs = [
    'Overview',
    'Personal Info',
    'Work Info',
    'Security'
  ];

  setTab(tab: string): void {
    this.activeTab = tab;
  }

  toggleEdit(): void {
    this.isEditing = !this.isEditing;
  }

  saveProfile(): void {
    this.isEditing = false;
    alert('Profile updated successfully!');
  }
}
