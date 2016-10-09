import { ProfileComponent } from './profile/profile.component'
import { RouterModule } from '@angular/router'
import { AddressComponent } from './address/address.component'

const routes = [
  {path: '', component: ProfileComponent},
  {path: 'address', loadChildren: 'app/address/address.module'}
]

export default RouterModule.forRoot(routes)
