import COLORS from "./../../styles/colors";

export default {
  container: {
    flex: 1,
    height: "100vh",
    backgroundImage: "linear-gradient(190deg, #34495E, #16A085)",
  },
  wrapIntro: {},
  intro: {
    paddingTop: 100,
    paddingBottom: 100,
  },
  wrapIntroInfo: {
    alignSelf: "center",
  },
  btnCV: {
    backgroundColor: COLORS.globalRed,
    borderWidth: 0,
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
    // font-family: 'Poppins';
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 36,
    color: COLORS.globalWhite,
  },
  introSubLabel: {
    // font-family: 'Poppins';
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 16,
    color: COLORS.globalGray,
  },
};
