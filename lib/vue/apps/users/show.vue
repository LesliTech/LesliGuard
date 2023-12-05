<script setup>
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


// · import vue tools
import { ref, onMounted } from "vue"
import { useRouter, useRoute } from 'vue-router'


// · import lesli stores
import { useUser } from "LesliAdmin/stores/user"


// · implement stores
const storeUser = useUser()
const router = useRouter()
const route = useRoute()


// · import profile components
import informationCard from "LesliAdmin/apps/users/components/information-card.vue"
import informationForm from "LesliAdmin/apps/users/components/information-form.vue"
/*
import informationForm from "CloudAdmin/apps/users/components/information-form.vue"

import managementRoles from "CloudAdmin/apps/users/components/management-roles.vue"
import managementSession from "CloudAdmin/apps/users/components/management-sessions.vue"
import managementSecurity from "CloudAdmin/apps/users/components/management-security.vue"
import managementSettings from "CloudAdmin/apps/users/components/management-settings.vue"
*/




// · translations
const translations = {
    core: {
        roles: I18n.t("core.roles"),
        users: I18n.t("core.users"),
        shared: I18n.t("core.shared")
    }
}


// · 
const tab = ref(0)


// · initializing
onMounted(() => {
    // storeUser.$reset()
    // storeUser.getOptions()
    storeUser.getUser(route.params?.id)
})
</script>
<template>
    <lesli-application-container>
        <information-card></information-card>
        <lesli-tabs v-model="tab">
            <lesli-tab-item icon="info_outline" title="Information">
                <information-form></information-form>
            </lesli-tab-item>
        </lesli-tabs>
    </lesli-application-container>
    <!--
    <application-component>
        <information-card></information-card>
        <lesli-tabs v-model="tab" v-if="storeUser.user.id">
            <lesli-tab-item icon="info_outline" :title="translations.core.users.view_tab_title_information">
                <information-form></information-form>
            </lesli-tab-item>
            <lesli-tab-item icon="security" :title="translations.core.users.view_tab_title_roles_and_privileges">
                <management-roles></management-roles>
            </lesli-tab-item>
            <lesli-tab-item icon="lock_outline" :title="translations.core.users.view_tab_title_security || 'Security'">
                <management-security></management-security>
            </lesli-tab-item>
            <lesli-tab-item icon="devices" :title="translations.core.users.view_tab_title_session || 'Sessions'" paddingless>
                <management-session></management-session>
            </lesli-tab-item>
            <lesli-tab-item icon="settings" :title="translations.core.users.view_tab_title_settings">
                <management-settings></management-settings>
            </lesli-tab-item>
        </lesli-tabs>
    </application-component>
    -->
</template>