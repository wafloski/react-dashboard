import React from 'react';
import GridViewTemplate from "templates/GridViewTemplate";
import Card from "components/molecules/Card/Card";

const articles = [
    {
        id: 1,
        title: 'React on my mind',
        content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
        articleUrl: 'https://www.youtube.com/watch?v=FWDXwrgdm9w',
        created: '1 day',
    },
    {
        id: 2,
        title: 'Wish you React',
        content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
        articleUrl: 'https://www.youtube.com/watch?v=FWDXwrgdm9w',
        created: '1 day',
    },
    {
        id: 3,
        title: 'You gave React a bad name',
        content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
        articleUrl: 'https://www.youtube.com/watch?v=FWDXwrgdm9w',
        created: '5 days',
    },
    {
        id: 4,
        title: 'Is it React you looking for?',
        content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
        articleUrl: 'https://www.youtube.com/watch?v=FWDXwrgdm9w',
        created: '10 days',
    },
];

const Articles = () => (
    <GridViewTemplate pageType="articles">
        { articles.map(({ title, content, articleUrl, created, id }) => (
            <Card
                id={id}
                cardType="articles"
                title={title}
                content={content}
                articleUrl={articleUrl}
                created={created}
                key={id}
            />
        ))}
    </GridViewTemplate>
);

export default Articles;