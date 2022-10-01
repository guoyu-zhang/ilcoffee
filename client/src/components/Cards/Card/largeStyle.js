import { makeStyles } from "@material-ui/core/styles";

export const useLargeStyles = makeStyles(({ breakpoints, spacing }) => ({
  root: {
    borderRadius: 12,
  },
  media: {
    borderRadius: 6,
    margin: 10,
    height: 333,
    width: "95%",
    [breakpoints.up("md")]: {
      width: "100%",
      marginLeft: spacing(3),
    },
  },
  card: {
    minWidth: 300,
    borderRadius: 8,
    [breakpoints.up("md")]: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
    },
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  cardContent: {
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    flexWrap: "wrap",
    "& > *": {
      margin: spacing(0.5),
    },
  },
  header: {
    width: "100%",
  },
  flatText: {
    overflow: "hidden",
    maxHeight: 37,
    transition: "max-height 1s ease-out",
    width: "100%",
  },
  fullText: {
    overflow: "hidden",
    maxHeight: 1000,
    transition: "max-height 1s ease-in",
    width: "100%",
  },
  hr: {
    width: 20,
    height: 2,
    backgroundColor: "#d6d6d6",
    border: "none",
    marginTop: 13,
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    marginTop: 15,
  },
  tag: {
    position: "relative",
    top: -10,
  },
  verifiedIcon: {
    position: "relative",
    marginLeft: 5,
  },
}));
