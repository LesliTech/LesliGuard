/*
Lesli

Copyright (c) 2023, Lesli Technologies, S. A.

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program. If not, see http://www.gnu.org/licenses/.

Lesli · Ruby on Rails SaaS Development Framework.

Made with ♥ by https://www.lesli.tech
Building a better future, one line of code at a time.

@contact  hello@lesli.tech
@website  https://www.lesli.tech
@license  GPLv3 http://www.gnu.org/licenses/gpl-3.0.en.html

// · ~·~     ~·~     ~·~     ~·~     ~·~     ~·~     ~·~     ~·~     ~·~
// · 
*/


// · Import Lesli builders
import application from "Lesli/application"
import translation from "Lesli/translation"


// · Import engine translations
import translations from "LesliAdmin/stores/translations.json"


// · 
import applicationUsersIndex from "LesliAdmin/apps/users/index.vue"
import applicationUsersShow from "LesliAdmin/apps/users/show.vue"

import appRolesNew from "LesliGuard/apps/roles/new.vue"
import appRolesIndex from "LesliGuard/apps/roles/index.vue"
import appDescriptorsIndex from "LesliGuard/apps/descriptors/index.vue"
import appDescriptorsNew from "LesliGuard/apps/descriptors/new.vue"


// · Buil Lesli translations
translation(translations)


// · 
application("LesliGuard", [{
    path: "/users",
    component: applicationUsersIndex
}, {
    path: "/users/:id",
    component: applicationUsersShow
}, {
    path: "/roles",
    component: appRolesIndex
}, {
    path: "/roles/new",
    component: appRolesNew
}, {
    path: "/descriptors",
    component: appDescriptorsIndex
}, {
    path: "/descriptors/new",
    component: appDescriptorsNew
}])