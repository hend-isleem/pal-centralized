import React, { useEffect } from "react";
import { Grid, Item, Header } from "semantic-ui-react";
import { Link } from "react-router-dom";
import "./General.css";
import { useSelector, useDispatch } from "react-redux";
import { fetchPost } from "../../actions";

const HomePagePosts = () => {
  const posts: any = useSelector((state: any) => state.posts);
  const dispatch = useDispatch();

  let counter = 0;

  useEffect(() => {
    dispatch(fetchPost());
  }, []);

  const postItems = posts.items ? posts.items : "";
  const Element = (post: any) => {
    if (counter < 3) {
      counter++;
      return (
        <Grid.Column>
          <Item.Group className="post-home-page">
            <Item style={{ padding: "2rem 2rem" }}>
              <Item.Image size="tiny" src={post.logo} />

              <Item.Content>
                <Item.Header>{post.title}</Item.Header>
                <Item.Meta>by RBK</Item.Meta>
                <Item.Description>
                  <p>{post.description}</p>
                </Item.Description>
                <Item.Extra as="a">
                  <Link to="#">Additional Details</Link>
                </Item.Extra>
              </Item.Content>
            </Item>
          </Item.Group>
        </Grid.Column>
      );
    }
  };

  const resetCounter = () => {
    counter = 0;
  };

  return (
    <div style={{ margin: "4rem auto", width: "75%" }}>
      <Header as="h1">Scholarship</Header>
      <Grid columns={3}>
        <Grid.Row>{postItems.map((post: any) => Element(post))}</Grid.Row>
      </Grid>
      {resetCounter()}
      <Header as="h1">Jobs</Header>
      <Grid columns={3}>
        <Grid.Row>{postItems.map((post: any) => Element(post))}</Grid.Row>
      </Grid>
      {resetCounter()}

      <Header as="h1">Training</Header>
      <Grid columns={3}>
        <Grid.Row>{postItems.map((post: any) => Element(post))}</Grid.Row>
      </Grid>
    </div>
  );
};

export default HomePagePosts;
