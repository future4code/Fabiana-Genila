export const goToAdminHomePage = (history) => {
    history.push("/admin/trips/list")
}

export const goToApplicationFormPage = (history) => {
    history.push("/application-form-page")
}

export const goToCreateTripPage = (history) => {
    history.push("/admin/trips/create")
}

export const goToListTripsPage = (history) => {
    history.push("/list-trips-page")
}

export const goToLoginPage = (history) => {
    history.push("/login-page")
}

export const goToTripDetailsPage = (history) => {
    history.push("/admin/trips/:id")
}

export const goToLastPage = (history) => {
    history.goBack()
}

export const goToHomePage = (history) => {
    history.push("/")
}

