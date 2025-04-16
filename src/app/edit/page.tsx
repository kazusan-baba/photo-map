'use client';

import {Button, TextField} from "@mui/material";
import {LatLng, type LatLngLiteral} from "leaflet";
import dynamic from "next/dynamic";
import {useCallback, useMemo, useState} from "react";
import {useDropzone} from "react-dropzone"
import {Controller, useForm} from "react-hook-form";
import {useSearchParams} from "next/navigation";
import type {Article, ArticleSubmit, CreateArticleData} from "@/components/Article";
import {Insert, Update} from "@/components/formaction";
import {prisma} from "@/components/prisma";

const Edit = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
	
	const getDefaultValues = (): CreateArticleData | Article => {
		const defaultValues: CreateArticleData = {
			title: "",
			latitude: 35.68,
			longitude: 139.76,
			description: "",
		};
		// if (id) {
		// 	let articleData: CreateArticleData | null = null;
		// 	prisma.article.findUnique({where: {id: Number.parseInt(id)}}).then(value => {articleData = value})
		// 	return  articleData ?? defaultValues;
		// }
		return defaultValues;
	}
  
  const [location, setLocation] = useState<LatLngLiteral>(new LatLng(getDefaultValues().latitude, getDefaultValues().longitude));
  const [spots, setSpots] = useState<CreateArticleData[]>([]);
  const {control, handleSubmit, setValue} = useForm<ArticleSubmit >({defaultValues: getDefaultValues()});
  
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
    setValue("images", acceptedFiles.map(value => value.name));
  }, []);
  
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})
  
  const onSubmit = (data: ArticleSubmit) => {
    setSpots([...spots, data]);
		if (id) {
			Update(data, Number.parseInt(id));
		} else {
			Insert(data);
		}
	};
  
  return (
    <div>
			<MapComponent location={location} onMapClick={onMapClick}/>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Controller
					name="title"
					control={control}
					render={({field}) => (
						<TextField {...field} label={"タイトル"}/>
					)}
				/>
				<Controller
					name="latitude"
					control={control}
					render={({field}) => (
						<TextField {...field} disabled={true} label={"緯度"}/>
					)}
				/>
				<Controller
					name="longitude"
					control={control}
					render={({field}) => (
						<TextField {...field} disabled={true} label={"経度"}/>
					)}
				/>
				<Controller
					name="description"
					control={control}
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