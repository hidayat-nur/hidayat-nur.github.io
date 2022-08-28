import COLORS from "./../../styles/colors";

export default {
  wrapIntro: {
    backgroundColor: COLORS.lightYellow,
  },
  intro: {
    paddingTop: 100,
    paddingBottom: 100,
  },
  wrapIntroInfo: {
    alignSelf: "center",
  },
  wrapAvatar: {
    alignSelf: "center",
    textAlign: "right" as const,
  },
  avatar: {
    width: 230,
    height: 230,
  },
  introLabel: {
    color: COLORS.darkNavy,
    fontWeight: 500,
  },
  introSubLabel: {
    color: COLORS.darkNavy,
  },
};
