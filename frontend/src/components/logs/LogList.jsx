import LogCard from "./LogCard";

import EmptyState from "./EmptyState";

export default function LogList({

    logs,

    search,

    filter,
    onEdit,
    onDelete

}) {

    const filtered = logs.filter((log) => {

        const matchTitle = log.title

            .toLowerCase()

            .includes(search.toLowerCase());

        const matchFilter =

            filter === "All"

            ||

            log.status === filter;

        return matchTitle && matchFilter;

    });

    if (filtered.length === 0) {

        return <EmptyState />

    }

    return (

        <div className="space-y-5">

            {

                filtered.map((log) => (

                    <LogCard
                    key={log._id}

    log={log}

    onEdit={onEdit}

    onDelete={onDelete}

/>

                ))

            }

        </div>

    )

}