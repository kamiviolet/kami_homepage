import socialmediaList from "@/lib/constants/social_media";
import SocialMediaType from "@/types/socialmedia.type";
import SocialMediaCard from "./socialmedia_card";

const styles = {
  card_wrapper: "grid text-center place-center",
  media_card: {
    card: "grid place-items-center m-8",
  },
};

export default function SocialMediaContainer() {
  return (
    <div className={styles.card_wrapper}>
      {socialmediaList.map((sc: SocialMediaType, i: number) => {
        return (
          <SocialMediaCard
            key={sc + "_" + i}
            sc={sc}
            styles={styles.media_card}
          />
        );
      })}
    </div>
  );
}
