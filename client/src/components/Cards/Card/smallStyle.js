import { makeStyles } from "@material-ui/core/styles";

export const useSmallStyles = makeStyles(({ spacing }) => ({
  root: {
    borderRadius: 12,
  },
  media: {
    borderRadius: 6,
    margin: 10,
    height: 250,
  },
  card: {
    minWidth: 300,
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
    width: 24,
    height: 2,
    backgroundColor: "#ddd",
    border: "none",
    marginTop: 13,
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    paddingTop: 10,
  },
}));
