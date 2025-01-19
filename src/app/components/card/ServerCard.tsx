import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { ServerCardProps } from "@/types/ServerCardInterface";
import { useTheme } from "@/context/ThemeContext";

const ServerCard: React.FC<ServerCardProps> = ({ name, game, players, status, version, type, region, mods }) => {
  const { theme } = useTheme();

  return (
    <Card className={`border rounded-lg shadow-lg transition-transform transform hover:scale-105 ${status === "online" ? "border-gray-500" : "border-red-500"} ${theme === "light" ? "bg-[var(--background-light)]" : "bg-[var(--background-dark)]"} font-[family-name:var(--font-geist-sans)]`}>
      <CardMedia
        component="img"
        style={{ height: '200px' }}
        image="/minecraft_logo.png"
        alt="Minecraft Logo"
      />
      <CardContent className={`${theme === "light" ? "bg-[var(--background-light)]" : "bg-[var(--background-dark)]"} ${theme === "light" ? "text-gray-900" : "text-gray-100"} font-[family-name:var(--font-geist-sans)]`}>
        <Typography variant="h5" component="div" className="!font-extrabold mt-4 mb-4">
          {name}
        </Typography>
        <div className="flex flex-wrap justify-between gap-y-2">
          <Typography variant="body2" className={`w-[48%] !font-extrabold ${theme === "light" ? "text-gray-600" : "text-gray-300"}`}>
            Game: {game}
          </Typography>
          <Typography variant="body2" className={`w-[48%] text-right !font-extrabold ${theme === "light" ? "text-gray-600" : "text-gray-300"}`}>
            Players: {players}
          </Typography>
          <Typography variant="body2" className={`!font-extrabold w-[48%] ${status === "online" ? "text-green-500" : "text-red-500"}`}>
            Status: {status.charAt(0).toUpperCase() + status.slice(1)}
          </Typography>
          <Typography variant="body2" className={`w-[48%] text-right !font-extrabold ${theme === "light" ? "text-gray-600" : "text-gray-300"}`}>
            Version: {version}
          </Typography>
          <Typography variant="body2" className={`w-[48%] !font-extrabold ${theme === "light" ? "text-gray-600" : "text-gray-300"}`}>
            Type: {type}
          </Typography>
          <Typography variant="body2" className={`w-[48%] text-right !font-extrabold ${theme === "light" ? "text-gray-600" : "text-gray-300"}`}>
            Region: {region}
          </Typography>
        </div>
      </CardContent>
      <CardActions className={`${theme === "light" ? "bg-[var(--background-light)]" : "bg-[var(--background-dark)]"} ${theme === "light" ? "text-gray-900" : "text-gray-100"} font-[family-name:var(--font-geist-sans)]`}>
        <div className="flex flex-nowrap gap-3 m-1 overflow-x-auto">
          {mods.map((mod, index) => (
            <span key={index} className={`px-2 py-1 !font-extrabold border border-[rgb(33,150,243)] rounded-lg transition-colors duration-200 ${theme === "light" ? "text-blue-900 hover:bg-blue-200" : "text-blue-100 hover:bg-blue-800"}`}>
              {mod}
            </span>
          ))}
        </div>
      </CardActions>
    </Card>
  );
};

export default ServerCard;