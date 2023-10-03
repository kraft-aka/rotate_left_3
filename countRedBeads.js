// Two red beads are placed between every two blue beads.
// There are N blue beads. After looking at the arrangement
// below work out the number of red beads.

// @ @@ @ @@ @ @@ @ @@ @ @@ @

// Implement count_red_beads(n) (in PHP count_red_beads($n); in Java,
// Javascript, TypeScript, C, C++ countRedBeads(n)) so that it
// returns the number of red beads.
// If there are less than 2 blue beads return 0.

const countRedBeads = (n) => (n > 2 ? n * 2 - 2 : 0);
