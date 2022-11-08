import COLORS from "./../../styles/colors";

export default {
  container: {
    height: "100vh",
    backgroundImage: "linear-gradient(190deg, #34495E, #16A085)",
    alignItems: "center",
    display: "flex",
  },
  wrapIntroInfo: {},
  col_bt: {
    alignItems: "center",
    display: "flex",
  },
  btnCV: {
    backgroundColor: COLORS.globalRed,
    borderWidth: 0,
    marginTop: 25,
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 20,
    color: COLORS.globalGray,
  },
  link: {
    color: COLORS.lightYellow,
    textDecoration: "none",
  },
  wrapAvatar: {},
  avatar: {
    width: 560,
    height: 560,
  },
  introLabel: {
    // font-family: 'Poppins';
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 45,
    color: COLORS.globalWhite,
  },
  introSubLabel: {
    // font-family: 'Poppins';
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 20,
    color: COLORS.globalGray,
    marginTop: 25,
  },
};
