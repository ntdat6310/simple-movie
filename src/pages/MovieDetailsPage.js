import React from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { api_key_themoviedb, fetcher } from "../config";

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  console.log("movieId", movieId);
  const { data, error } = useSWR(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${api_key_themoviedb}`,
    fetcher
  );
  if (error) return <div>Failed to load data</div>;
  if (!data) return <div>Loading...</div>;
  console.log("data", data);
  return <div className="text-white">{data.original_title}</div>;
}
