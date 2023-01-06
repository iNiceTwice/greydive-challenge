import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
  <ContentLoader 
    speed={2}
    width={448}
    height={150}
    viewBox="0 0 500 150"
    backgroundColor="#bfbfbf"
    foregroundColor="#a19b9b"
    {...props}
  >
    <rect x="12" y="56" rx="3" ry="3" width="448" height="90" /> 
    <rect x="13" y="16" rx="3" ry="3" width="448" height="31" />
  </ContentLoader>
)

export default Skeleton