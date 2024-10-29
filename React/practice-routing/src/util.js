export const getAvgRating = (reviews) => {
    let sumOfRatings = 0;
    if (reviews) {
        for (let review of reviews) {
            sumOfRatings += review.rating;
        }
    }
    if (sumOfRatings === 0) {
        return '';
    }
    const rating = Number((sumOfRatings / reviews.length));

    return rating.toFixed(1);
}