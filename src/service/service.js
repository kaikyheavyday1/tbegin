export class Service {
    checkPassword = (e) => {
        if (e.password === e.confirmPassword) return true
        return false
    }

    validateInput(e) {
        if(!e.username) return 'username'
        if(!e.name) return 'name'
        if(!e.surname) return 'surname'
        if(!e.email) return 'email'
        if(!e.password) return 'password'
        if(!e.confirmPassword) return 'confirmPassword'
        if(!e.tel) return 'tel'
        if(!e.birthday) return 'birthday'
        if(!e.address) return 'address'
        if(!e.province) return 'province'
        if(!e.district) return 'district'
        if(!e.tambon) return 'tambon'
        if(!e.addresscode) return 'addresscode'
        if(!e.gender) return 'gender'
        return ''
    }
}
