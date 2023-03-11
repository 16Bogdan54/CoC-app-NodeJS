import { Box, CardContent, Grid, Typography } from "@mui/material";
import { Clan } from "clashofclans.js";

type Props = {
  clan: Clan;
};

const MyComponent = ({ clan }: Props) => {
  return (
    <>
      <Grid item xs={12}>
        <Grid container spacing={1}>
          {clan.members.map((member, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <CardContent className="bg-[#3681D8] rounded-lg">
                <Box className="flex items-center justify-between">
                  <Typography sx={{ fontSize: 16 }} color="text.secondary">
                    {member.clanRank}. {member.trophies}
                  </Typography>
                  <img width={40} src={member.league.icon.url} alt="league" />
                </Box>
                <Typography variant="h5">{member.name}</Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  {member.role}
                </Typography>
                <Typography variant="body2">
                  Troops donated: {member.donations}
                  <br />
                  Troops received: {member.donations}
                </Typography>
              </CardContent>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </>
  );
};

export default MyComponent;
