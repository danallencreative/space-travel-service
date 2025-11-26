//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here

// For destination

router.post('/where-destination', function(request, response) {

	const whereDest = request.session.data['whereDestination']
	if (whereDest == "moon"){
		response.redirect("/name")
	    } 
        else if (whereDest == "mars"){
		response.redirect("/name")
	    }else {
		response.redirect("/destination-error")
	}
})

// For name

router.post('/space-name', function(request, response) {

	const spcName = request.session.data['spaceName']
	if (spcName.trim().length > 0){
		response.redirect("/address")
	    } else {
		response.redirect("/name-error")
	}
	})

// For address line 1

router.post('/space-address', function(request, response) {

	const spcAdd1 = request.session.data['addressLine1']
	if (spcAdd1.trim().length > 0){
		response.redirect("/check")
	    } else {
		response.redirect("/address-error")
	}
	})

router.post('/space-address', function(request, response) {
	const spcTown = request.session.data['addressTown']
	if (spcTown.trim().length > 0){
		response.redirect("/check")
	    } else {
		response.redirect("/address-error")
	}
	})

router.post('/space-address', function(request, response) {
		const spcCode = request.session.data['addressPostcode']
		if (spcCode.trim().length > 0){
			response.redirect("/check")
			} else {
			response.redirect("/address-error")
		}
		})

