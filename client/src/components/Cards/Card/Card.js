import React, { useState } from "react";
import cx from "clsx";
import {
  Typography,
  Rating,
  IconButton,
  Link,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import VerifiedIcon from "@mui/icons-material/Verified";
import { useSoftRiseShadowStyles } from "@mui-treasury/styles/shadow/softRise";
import { useSmallStyles } from "./smallStyle";
import { useLargeStyles } from "./largeStyle";

const CafeCard = ({ cafe, isSmallCard }) => {
  const [expanded, setExpanded] = useState(false);
  const smallStyles = useSmallStyles();
  const largeStyles = useLargeStyles();
  const styles = isSmallCard ? smallStyles : largeStyles;
  const shadowStyles = useSoftRiseShadowStyles({ inactive: false });

  return (
    <Card className={cx(styles.card, shadowStyles.root)}>
      <CardMedia
        className={cx(styles.media, styles.root)}
        image={cafe.imageUrl}
      />
      <CardContent className={styles.cardContent}>
        <div className={cx(styles.header, styles.root)}>
          {!isSmallCard && (
            <Typography variant="h4" className={styles.tag}>
              TOP RATED
              <VerifiedIcon className={styles.verifiedIcon} />
            </Typography>
          )}
          <div>
            <Rating
              name="read-only"
              value={cafe.rating}
              precision={0.1}
              readOnly
            />
            <Typography>({cafe.userRatingsTotal})</Typography>
          </div>
          <Typography noWrap variant="h4">
            <Link
              href={cafe.website}
              color="inherit"
              underline="hover"
              target="_blank"
            >
              {cafe.name}
            </Link>
          </Typography>
        </div>
        <div
          className={
            !expanded
              ? cx(styles.flatText, styles.root)
              : cx(styles.fullText, styles.root)
          }
        >
          <Typography variant="p">"{cafe.reviews?.[0]?.text}"</Typography>
          <hr className={cx(styles.hr, styles.root)} />
          {cafe.openingHours.weekday_text?.map((day) => (
            <Typography key={day} variant="subtitle1">
              {day}
            </Typography>
          ))}
          <hr className={cx(styles.hr, styles.root)} />
          <Typography variant="subtitle1">{cafe.phone}</Typography>
          <Typography variant="subtitle1">{cafe.address}</Typography>
        </div>
        <div className={cx(styles.buttonContainer, styles.root)}>
          <IconButton
            onClick={() => setExpanded(!expanded)}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon className={expanded ? styles.expandOpen : null} />
          </IconButton>
        </div>
      </CardContent>
    </Card>
  );
};
export default CafeCard;
