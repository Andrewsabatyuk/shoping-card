import { Button, Stack } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  let navigate = useNavigate()
  const toStore = () => {
    navigate("/store")
  }

  return (
    <Stack gap={3}>
      <h1>Welcome to our Fast Food Store</h1>
      <h3>Enjoy the meal</h3>
      <Button className="ms-auto" onClick={() => toStore()} size="lg">TO STORE</Button>
    </Stack>
  )
}
