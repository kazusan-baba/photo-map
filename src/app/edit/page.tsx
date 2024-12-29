'use client';

import {Button, TextField} from "@mui/material";
import {LatLng, type LatLngLiteral} from "leaflet";
import dynamic from "next/dynamic";
import {useCallback, useMemo, useState} from "react";
import {useDropzone} from "react-dropzone"
import {Controller, useForm} from "react-hook-form";
import {useSearchParams} from "next/navigation";
import type {CreateArticle} from "@/components/Article";

const Edit = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  
  const [location, setLocation] = useState<LatLngLiteral>(new LatLng(35.68, 139.76));
  const [spots, setSpots] = useState<CreateArticle[]>([]);
  const {control, handleSubmit, setValue} = useForm<CreateArticle>({});
  
  const MapComponent = useMemo(
    () => dynamic(() => import("@/components/MapViewer"), {
      loading: () => <p>A map loading</p>,
      ssr: false,
    }),
    []
  );
  
  const onMapClick = (point:LatLngLiteral) => {
    setLocation(point);
    setValue("latitude", point.lat);
    setValue("longitude", point.lng);
  };
  
  const onDrop = useCallback((acceptedFiles: File[]) => {
    setValue("image", acceptedFiles);
  }, []);
  
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})
  
  const onSubmit = (data: CreateArticle) => {
    setSpots([...spots, data]);
  };
  
  return (
    <div>
			<MapComponent location={location} onMapClick={onMapClick}/>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Controller
					name="latitude"
					control={control}
					defaultValue={0}
					render={({field}) => (
						<TextField {...field} disabled={true} label={"緯度"}/>
					)}
				/>
				<Controller
					name="longitude"
					control={control}
					defaultValue={0}
					render={({field}) => (
						<TextField {...field} disabled={true} label={"経度"}/>
					)}
				/>
				<Controller
					name="description"
					control={control}
					defaultValue={""}
					render={({field}) => (
						<TextField {...field} placeholder={"説明"}/>
					)}
				/>
				<div {...getRootProps()}>
					<input {...getInputProps()} />
					{
						isDragActive ?
							<p>Drop the files here ...</p> :
							<p>画像を ドロップ または、 クリックして選択</p>
					}
				</div>
				<Button type={"submit"}>追加</Button>
			</form>
    </div>
  )
}

export default Edit;