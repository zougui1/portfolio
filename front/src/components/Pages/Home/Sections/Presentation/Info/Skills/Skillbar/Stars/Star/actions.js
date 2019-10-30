export const getStarClass = value => {
  switch (value) {
    case 0:
      return 'far fa-star';
    case 0.5:
      return 'fas fa-star-half-alt';
    default:
      return 'fas fa-star';
  }
}
