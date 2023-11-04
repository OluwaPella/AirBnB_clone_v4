$(document).ready(function() {
	const checkedAmenities = {};
	$('input[type="checkbox"]').change(function() {
		const amenityID = $(this).data('amenity-id');
		if ($(this).is(':checked')) {
			checkedAmenities[amenityID] = true;
		} else {
			delete checkedAmenities[amenityID];
		}
		const amenitiesHeader = $('#Amenities h4');
		const checkedAmenitiesList = object.keys(checkedAmenities).join(', ');
		amenitiesHeader.tect(checkedAmenitiesList);
	});
});
