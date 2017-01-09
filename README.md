# SnackChat

[Trello link][trello]

[trello]: https://trello.com/b/Q1cLTkjA/snackchat

## Minimum Viable Product

SnackChat is a web application inspired by Untapped built using Ruby on Rails
and React/Redux.  By the end of Week 9, this app will, at a minimum, satisfy the
following criteria with smooth, bug-free navigation, adequate seed data and
sufficient CSS styling:

- [ ] Hosting on Heroku
- [ ] New account creation, login, and guest/demo login
- [ ] Viewable user profiles containing their reviews
- [ ] Reviews
- [ ] Review comments
- [ ] Review ratings
- [ ] Review feed (bonus: with infinite Scroll)
- [ ] Bonus: search

## Design Docs
* [View Wireframes][wireframes]
* [React Components][components]
* [API endpoints][api-endpoints]
* [DB schema][schema]
* [Sample State][sample-state]

[wireframes]: docs/wireframes
[components]: docs/component-hierarchy.md
[sample-state]: docs/sample-state.md
[api-endpoints]: docs/api-endpoints.md
[schema]: docs/schema.md

## Implementation Timeline

### Phase 1: Backend setup and Front End User Authentication (2 days)

**Objective:** Functioning rails project with front-end Authentication

### Phase 2: Reviews Model, API, and components (2 days)

**Objective:** Reviews can be created, read, edited and destroyed through
the API.

### Phase 3: Comments (2 day)

**Objective:** Comments belong to Reviews that can be created, read, edited and destroyed through the API.

### Phase 5: Profiles (2 days)

**Objective:** Users have profiles that display their reviews and username

### Phase 6: - infinite scroll for Reviews Index (1 day)

**objective:** Add infinite scroll to reviews index

### Phase 7: - style overhaul (2 days)

**objective:** Make site drop dead gorgeous with seamless UX

### Bonus Features (TBD)
- [ ] Search reviews by content
