# Rails Angular 2 Starter Project

# Setup

1. Install gems with `bundle install`
2. Install javascript libs with `npm install`
3. Install DB with `rake db:create db:migrate`

# Running

1. Start rails with `rails s`
2. Navigate to http://localhost:3000 in your browser to see your Angular 2 app boot

# Structure

The idea here is that we don't want to use webpack because we don't need it
and it makes debugging harder. So we put our source `ts` files in public
and transpile them inline.  

In order to get rails to serve the npm packages we also have to make a small
configuration change in `config/application.rb` and add:

```
    config.assets.paths << Rails.root.join('node_modules')
```

Fairly standard but also, worth looking at are the

* Typescript configuration: `tsconfig.json`
* NPM project configuration: `package.json`

