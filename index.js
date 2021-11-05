function superbowlWin(record) {
  const winningTeamIfAny = record.find((element) => element.result === "W");

  if (winningTeamIfAny !== undefined) {
    return winningTeamIfAny.year;
  } else {
    return undefined;
  }
}
