// import Chart from "../../components/admin/chart/chart";
// import Deposits from "../../components/admin/deposits/Deposits";
// import Orders from "../../components/admin/orders/Orders";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
// import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Paper from "@mui/material/Paper";

const Dashboard = () => {
  return (
    <main>
      <Toolbar />
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={8} lg={9}>
            <Paper
              sx={{
                p: 2,
                display: "flex",
                flexDirection: "column",
                height: 240,
              }}
            >
            </Paper>
          </Grid>
          <Grid item xs={12} md={4} lg={3}>
            <Paper
              sx={{
                p: 2,
                display: "flex",
                flexDirection: "column",
                height: 240,
              }}
            >
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </main>
  );
};

export default Dashboard;