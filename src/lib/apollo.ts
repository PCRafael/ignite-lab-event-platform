import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: "https://api-sa-east-1.graphcms.com/v2/cl4opgfnz0p5f01z46wsr279m/master",
    cache: new InMemoryCache(),
});
