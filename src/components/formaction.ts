'use server'

import type {ArticleSubmit} from "@/components/Article";
import {prisma} from "@/components/prisma";

export const Insert = async (data: ArticleSubmit) => {
  await prisma.article.create({
    data: {
      title: data.title,
      thumbnail: data.images[0],
      latitude: data.latitude,
      longitude: data.longitude,
      description: data.description,
    }
  });
  
  for (const image of data.images) {
    await prisma.article_image.create({
      data: {
        article_id: await prisma.article.count(),
        image_path: image
      }
    });
  }
}

export const Update = async (data: ArticleSubmit, id: number) => {
  await prisma.article.update({
    data: {
      title: data.title,
      thumbnail: data.images[0],
      latitude: data.latitude,
      longitude: data.longitude,
      description: data.description,
    },
    where: {id: id}
  });
  
  // for (const image of data.images) {
  //   await prisma.article_image.update({
  //     data: {
  //       article_id: data.id,
  //       image_path: image
  //     },
  //     where: {article_id: data.id}
  //   });
  // }
}
