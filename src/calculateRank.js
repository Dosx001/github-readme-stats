function calculateRank({
  totalRepos,
  totalCommits,
  contributions,
  followers,
  prs,
  issues,
  stargazers,
}) {
  const COMMITS = 30;
  const CONTRIBS = 25;
  const REPO = 20;
  const ISSUES = 20;
  const STARS = 15;
  const PRS = 10;
  const FOLLOWERS = 5;

  const score = (
    totalCommits * COMMITS +
    contributions * CONTRIBS +
    issues * ISSUES +
    stargazers * STARS +
    prs * PRS +
    followers * FOLLOWERS +
    totalRepos * REPO
  );

  let level = Math.round(Math.abs(Math.cbrt(score - 99)));
  if (level < 101) {
    level = level.toString();
    return { level, "score": score };
  }
  level = (score - Math.pow(44, 3) - 99) * .000005;
  level = Math.round(Math.pow(Math.E, level)).toString();
  return { level, "score": score};
}

module.exports = calculateRank;
