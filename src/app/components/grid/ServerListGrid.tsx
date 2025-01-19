import React from "react";
import Grid from '@mui/material/Grid';
import { ServerCardProps } from "@/types/ServerCardInterface";
import ServerCard from '../card/ServerCard';

const ServerGrid = ({ serverData }: { serverData: ServerCardProps[] }) => {
  
  return (
    <div className="p-4">
      <Grid container spacing={3}>
        {serverData.map((server) => (
          <Grid item xs={12} sm={6} md={4} key={server.id}>
            <ServerCard {...server} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default ServerGrid;