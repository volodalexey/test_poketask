import { SpinDot, SpinDotItem, SpinSpinning } from "./styled";

export const Spinner = ({ isLoading }: {
  isLoading: boolean
}) => {
  return isLoading
    ? (
  <SpinSpinning>
    <SpinDot>
      <SpinDotItem itemIndex={1} />
      <SpinDotItem itemIndex={2} />
      <SpinDotItem itemIndex={3} />
      <SpinDotItem itemIndex={4} />
    </SpinDot>
  </SpinSpinning>
      )
    : null
};
