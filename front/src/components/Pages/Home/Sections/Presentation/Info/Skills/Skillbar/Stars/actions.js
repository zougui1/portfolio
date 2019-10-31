export const skillToNumber = skill => {
  switch (skill) {
    case 'beginner':
      return 1;
    case 'bad':
      return 2;
    case 'intermediary':
      return 3;
    case 'advanced':
      return 4;
    case 'expert':
      return 5;
    default:
      return 0;
  }
}
