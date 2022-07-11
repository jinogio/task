// 1-   Given the following endpoints please fetch a user and it's associated tags from 2 endpoints and
//      combine them when you have both call results
// 2-   Then once those are done please delete one of the returned tags
// 3-   Write in the history that you deleted the tag
//
// API endpoints
// GET /users
// GET /users/tags

// DELETE /users/tags
// POST /users/history

async function task() {
    try {
        // 1.1
        const user = await fetch("/users");
        // 1.2
        const tags = await fetch("/users/tags");
        // 1.3
        const combined = { user, tags };
        // 2
        await fetch("/users/tags", { body: tags[0], method: "DELETE" });
        // 3
        await fetch("/users/history", {
            body: { tag: tags[0], user },
            method: "POST",
        });
    } catch (error) {
        // TODO
    }
}