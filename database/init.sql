create table article
(
    id          int auto_increment primary key,
    title       varchar(255) null,
    thumbnail   varchar(255) null,
    latitude    float        null,
    longitude   float        null,
    description varchar(255) null,
    created_at  datetime     not null default current_timestamp,
    updated_at  datetime     not null default current_timestamp on update current_timestamp
);

create table article_image
(
    id              int auto_increment primary key,
    article_id      int,
    image_path      varchar(255),
    created_at  datetime     not null default current_timestamp,
    updated_at  datetime     not null default current_timestamp on update current_timestamp,
    foreign key (article_id) references article(id)
);