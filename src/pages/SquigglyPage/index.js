import Masonry from "@mui/lab/Masonry";
import { CommingSoon } from "../../components";
import { useBreakout } from "../../hooks";

export const SquigglyPage = () => {
  const screenType = useBreakout();
  return (
    <div style={{marginTop: '2rem', minHeight: 'calc(100vh - 64px - 170px)', padding: '0 1rem'}}>
      <Masonry columns={['desktop-l', 'desktop'].includes(screenType) ? 2 : 1} spacing={4}>
        <img src="https://lh3.googleusercontent.com/pw/AM-JKLXlsRmJgfDRxIrdRzG6s1nCkMFZOj1k1YHuBKnT6yF3H1UoTTjb-bU14xOvC_h5I68EAB9MPB3scBu8xd_aRprXr37r63NEGFIjPSE5pMtLhW6gLS2D4Q4_IU-LVg7dhiQhJQiHN4xXYdLbWlBZutoHYg=w1672-h893-no?authuser=0" />
        <img src="https://lh3.googleusercontent.com/pw/AM-JKLWi6MgC5VP4HYPK5AQ8RESfdV8zVQlgRC0HQXZSWJfIwv_amsvRcZZk6eDCayFoJjLUsb8JSw9E1-dY3DVc3b3dVOw2OQu88L1idMTbT9x0ygtHY2s5TVJVbvaL-r3cdCjDyvTqRzerISgVE9t70VozKg=w1672-h893-no?authuser=0" />
        <img src="https://lh3.googleusercontent.com/pw/AM-JKLVAxrrFHDUDow01VbWT7BB8ysCcefSmLUXb4VvTjJG1vF8HktYETMitd82ku8zgvQY05sEZuvPCbaRcJI1mU_6Pw-upnHuYBaKD4K3SUyR3KUzcrz6xx4Jrr-xLLC_QlvgMF2hMFg_fAe2F0G6R_suc7Q=w1469-h893-no?authuser=0" />
      </Masonry>
    </div>
  );
};
