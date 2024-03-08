import HomeSlider from "@/components/HomeSlider/HomeSlider";
import LeftMenu from "@/components/LeftMenu/LeftMenu";

export default function Home() {
  // const [isLeftMenuVisible, setLeftMenuVisible] = useState(false);

  // const toggleLeftMenu = () => {
  //   setLeftMenuVisible(!isLeftMenuVisible);
  // };
  return (
    <>
      <HomeSlider />
      {/* {isLeftMenuVisible && <LeftMenu toggleLeftMenu={toggleLeftMenu} />} */}
    </>
  );
}
