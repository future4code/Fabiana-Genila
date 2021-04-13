export const goToAdminHomePage = (history) => {
    history.push("/admin-home-page")
}

export const goToApplicationFormPage = (history) => {
    history.push("/application-form-page")
}

export const goToCreateTripPage = (history) => {
    history.push("/create-trip-page")
}

export const goToListTripsPage = (history) => {
    history.push("/list-trips-page")
}

export const goToLoginPage = (history) => {
    history.push("/login-page")
}

export const goToTripDetailsPage = (history) => {
    history.push("/trip-details-page")
}

export const goToLastPage = (history) => {
    history.goBack()
}

export const goToHomePage = (history) => {
    history.push("/")
}

