import type { CSSProperties } from "react";
import { Container } from "./style";
import { colors } from "../../utils/theme";
import { BeatLoader } from "react-spinners";

interface SpinnerProps {
  loading: boolean;
}
export const Spinner = ({ loading }: SpinnerProps) => {
  const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
  };
  return (
    <Container>
      <BeatLoader
        color={colors.main}
        loading={loading}
        cssOverride={override}
        size={30}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </Container>
  );
};
