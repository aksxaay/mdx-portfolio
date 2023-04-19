### delba portfolio temp setup

I have to somehow convert this into what mine sorta looks like.

```
yarn run dev
```

### what is prisma?

I also have to look into what prisma is
`yarn run generate` runs prisma generate and things.

[what is prisma // fireship](https://www.youtube.com/watch?v=rLRIB6AF2Dg)

prism open source tool that is a database
this is a modern app development
ObjectRelationalMapping

Prisma -> ORM
it has its own declarative schema language

converts schema into type definitions
prisma.studio manages all tables and rows and things.

to get started you need a relational database like MYSQL / PostgreSQL

mongoDB is supported as well.
```npx prisma init```
also prisma directory and things.
```prisma db pull generates a schema```

optional constraints
code is very concise than otherwise in raw SQL

to interact with the databse
`prisma generate` to generate the client library.


### What is an ORM?
which ORM should one use?
Object Relational Mapping it helps write less code and be more concise another stack that I have to add to my damn thing bruh.
[Ben Awad // ORM](https://www.youtube.com/watch?v=3Pxj-4IrOcs)

dude was using 
### Sequelize - 
- been around the longest
- solid and mature
- experience was meh
- documentation meh
- confusion points

idk I'm not happy using this either.

### TypeORM
- connections are confusin
- their API needs to be improved
- docs needs to be better.
- integration with TS(typescript) is much better
- nice `QueryBuilder()`  
- this is what Ben Awas consistently uses


### Prisma - not quite an ORM
- tries to replace traditional ORMs
- wouldn't categorize them an ORM.
- create a data model (graphQL syntax)
- generates a MySQL database for you / MongoDB
- generate this schema for you.
- generates all the CRUD operations for you
- integrates well with GraphQL API
- there's going to be an intermediate server
- speed is really fast.
- way less boilerplate to write
- new admin panel
- reminds me of sanity I suppose
- there's this extra server that you need to have
- they're going to get rid of the proxy server using probably a docker.
- you run into corner case and edge cases or something
- not working with some postgres columns


`prisma generate --watch` this updates automatically.

Prisma 2 is somewhere between an `ORM` and `QueryBuilder` closer to a query builder, and it has a higher level API

you can use a nodemon - this helps you watch the file.
what's the N+1 problem that prisma solves?
[N+1 query problem with ORMs](https://stackoverflow.com/questions/97197/what-is-the-n1-selects-problem-in-orm-object-relational-mapping)

okay apparently when you're trying to to execute a query you might trigger this issue without realizing where instead of doing one you might trigger the rest of the queries as well. I can't understand this quite well, but it seems prisma might solve this.

some bugs and things, caching issues.

`_app.tsx` was supposed to be the first page but
`[[...filter]].tsx` is somehow the first page along with Delba's profile picture



something called
[optional catch all routes](https://nextjs.org/docs/routing/dynamic-routes#optional-catch-all-routes)

catching all routes made optional by including the parameter in double brackets `[[...slug]]`
optional catch all is **optional**


there is that gradient that I just made wayy stronger, I'll soon figure out some way to overlay it, but

the bigger important one is the noise feel that we're getting on the entire website
edited the fturbulence noise.

next I have to figure out all the API keys involved and deployment I suppose

The files over at `video` are for straight videos. in-case you release videos or something.

also is prisma they've used `mysql` as their server, and I'm wondering if I can use mongo for it? I should be able to I think?

the `.env.example` in this project also has a shadow database, not sure if it applies to mongo rn

had to remove the line 
```prisma
relationMode = "prisma"
```

`prisma.session.findUnique()` wrong invocation

had to install `dotenv-cli` for prisma cli usage
modified `package.json` can now run 
`npm/yarn run generate`

## 15th April

I know I haven't particularly spoken with you in a good bit,
but everything's been good I'd say?

I've been hard at work trying to figure out how to get this up and running.

We've written out the content over the past few days, I've been proud of that.

But anyways,
there's some slug issue over at the quest-for-markdown-ascension/2.mdx
I have to figure out what it is.


1st successful build, I sent the `quest-for-markdown-ascension.mdx` file over to `drafts` 
and it built well

## 16th April
Well recently I've been running into `.contentlayer` folder not generating, so I added
`contentlayer dev & next dev` to the npm run scripts



SEO is an ongoing process, remember.
1. Google Search Console
2. Google Analytics
3. SEO auditing tools
4. meta tags updated - Yoast SEO


Search Console
has some steps of verification
- also related to the google domains


need to learn how Next.js's SEO stuff works.

you can apparently just curl the page directly (like google's crawlers)
`curl https://mdx-portfolio-blog.vercel.app/`

I need to find out what happens when someone sends the link / or it is an embed of sorts.

Spelling errors: One Find Day.