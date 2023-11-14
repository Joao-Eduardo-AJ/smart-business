import { TextsProvider } from "@/translation";
import TypeIt from "typeit-react";

export function Writer() {
  const texts = TextsProvider.get();

  return (
    <TypeIt
      options={{
        loop: true,
        speed: 200,
        lifeLike: true,
        cursor: false,
      }}
      getBeforeInit={instance => {
        instance
          .type(texts.SUCCESS)
          .pause(600)
          .delete(600)
          .pause(600)
          .type(texts.EMPHASIS)
          .pause(600)
          .delete(600)
          .pause(600)
          .type(texts.IMPACT);
        return instance;
      }}
    />
  );
}
